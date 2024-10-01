import path from 'path'
import express from 'express'
import multer from 'multer'
import { fileURLToPath } from 'url'  // To simulate __dirname in ES modules
import fs from 'fs'

// Get the __dirname equivalent
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Ensure that the 'uploads' directory exists
const uploadsDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination(req, file, cb) {
    // Save to the correct absolute path
    cb(null, uploadsDir)
  },
  filename(req, file, cb) {
    // Create a unique filename with the original extension
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
  },
})

// File filter to allow only images
function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = mimetypes.test(file.mimetype)

  if (extname && mimetype) {
    cb(null, true)
  } else {
    cb(new Error('Images only!'), false)
  }
}

// Create multer instance with the storage and file filter options
const upload = multer({ storage, fileFilter })
const uploadSingleImage = upload.single('image')

// Define the POST route to handle image uploads
router.post('/', (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      // Handle file upload errors
      return res.status(400).send({ message: err.message })
    }

    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' })
    }

    // Send the image URL back to the client (relative path)
    res.status(200).send({
      message: 'Image uploaded successfully',
      image: `/uploads/${req.file.filename}`,  // Public-facing URL
    })
  })
})

export default router

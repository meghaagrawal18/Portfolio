
import { useState } from "react"
import { Box, Typography, TextField, Button, IconButton } from "@mui/material"

const ContactFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to an API)
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
    onClose() // Close the modal after submission
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1001,
        overflowY: "auto",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1a1a1a", // Matches --bg-secondary
          borderRadius: "16px",
          padding: "2rem",
          maxWidth: "500px",
          width: "100%",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
          border: "1px solid #333",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: "#cccccc",
            "&:hover": {
              color: "#fbbf24",
            },
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </IconButton>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "#ffffff",
            fontWeight: 700,
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          Send Message
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#cccccc",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          {"Let's start the conversation"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="body2" sx={{ color: "#ffffff", marginBottom: "0.5rem" }}>
              Name
            </Typography>
            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#333", // Matches --bg-tertiary
                  "& fieldset": {
                    borderColor: "#555", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#fbbf24", // Accent color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fbbf24", // Accent color on focus
                  },
                  "& input": {
                    color: "#ffffff", // Text color
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#cccccc", // Label color
                },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="body2" sx={{ color: "#ffffff", marginBottom: "0.5rem" }}>
              Email
            </Typography>
            <TextField
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#333",
                  "& fieldset": {
                    borderColor: "#555",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fbbf24",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fbbf24",
                  },
                  "& input": {
                    color: "#ffffff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#cccccc",
                },
              }}
            />
          </Box>

          <Box sx={{ marginBottom: "1.5rem" }}>
            <Typography variant="body2" sx={{ color: "#ffffff", marginBottom: "0.5rem" }}>
              Message
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#333",
                  "& fieldset": {
                    borderColor: "#555",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fbbf24",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fbbf24",
                  },
                  "& textarea": {
                    color: "#ffffff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#cccccc",
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#fbbf24", // Accent color
              color: "#000", // Black text
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#f59e0b", // Darker accent on hover
              },
            }}
          >
            Send message
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default ContactFormModal

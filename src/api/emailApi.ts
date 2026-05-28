import axios from "axios"
import type { EmailRequest } from "../types/email"

// const BASE_URL = "http://localhost:8080/email"
const BASE_URL = "https://backend-ai-assist-mailer.onrender.com/email";

export const generateEmail = async (
  data: EmailRequest
) => {

  let endpoint = "/reply"

  switch (data.action) {

    case "summarize":
      endpoint = "/summarize"
      break

    case "rewrite":
      endpoint = "/rewrite"
      break

    case "grammar":
      endpoint = "/grammar"
      break

    default:
      endpoint = "/reply"
  }

  const response = await axios.post(
    `${BASE_URL}${endpoint}`,
    data
  )

  return response.data
}
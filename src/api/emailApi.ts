import axios from "axios";
import type { EmailRequest, EmailResponse } from "../types/email";

// const API_BASE_URL = "http://localhost:8080"
const API_BASE_URL = "https://backend-ai-assist-mailer.onrender.com";

export const generateEmail = async (
  payload: EmailRequest,
): Promise<EmailResponse> => {
  const response = await axios.post(`${API_BASE_URL}/email/generate`, payload);

  return response.data;
};

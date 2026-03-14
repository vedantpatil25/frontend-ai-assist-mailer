export interface EmailRequest {
  emailContent: string
  userRecommendation: string
  tone: string
  action: string
}

export interface EmailResponse {
  response: string
}
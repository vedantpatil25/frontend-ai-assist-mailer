import { useState } from "react"
import axios from "axios"

import { generateEmail } from "../api/emailApi"
import type { EmailRequest } from "../types/email"

export const useEmailGenerator = () => {

  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState("")

  const [error, setError] = useState("")

  const generate = async (
    data: EmailRequest
  ) => {

    try {

      setLoading(true)

      setError("")

      setResult("")

      const response = await generateEmail(data)

      setResult(response.response)

    } catch (err) {

      console.error(err)

      if (axios.isAxiosError(err)) {

        if (err.response) {

          // Server responded with error status

          const status = err.response.status

          switch (status) {

            case 400:
              setError("Invalid request.")
              break

            case 404:
              setError("API endpoint not found.")
              break

            case 500:
              setError("Internal server error.")
              break

            default:
              setError(
                err.response.data?.message ||
                "Something went wrong."
              )
          }

        } else if (err.request) {

          // No response from server

          setError(
            "Server unavailable. Please try again."
          )

        } else {

          // Something else

          setError(
            "Unexpected error occurred."
          )
        }

      } else {

        setError(
          "Unknown error occurred."
        )
      }

    } finally {

      setLoading(false)
    }
  }

  return {
    generate,
    result,
    loading,
    error
  }
}
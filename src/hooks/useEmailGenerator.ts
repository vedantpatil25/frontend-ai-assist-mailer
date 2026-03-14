import { useState } from "react";
import { generateEmail } from "../api/emailApi";
import type { EmailRequest } from "../types/email";

export const useEmailGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generate = async (data: EmailRequest) => {
    try {
      setLoading(true);

      const response = await generateEmail(data);

      setResult(response.response);
    } catch (error) {
      console.error("Error generating email:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    generate,
    result,
    loading,
  };
};

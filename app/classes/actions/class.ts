"use server";

interface Class {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  totalTopics: number;
  totalSubtopics: number;
  totalParticipants: number;
}

interface ClassDataResponse {
  resultCode: number;
  resultMessage: string;
  data: {
    classes: Class[];
  };
}

interface ClassDetailResponse {
  resultCode: number;
  resultMessage: string;
  data: {
    class: Class;
  };
}

export const fetchClassData = async (): Promise<Class[]> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error("API base URL is not defined");
    }

    const response = await fetch(`${apiBaseUrl}api/class`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const jsonData: ClassDataResponse = await response.json();

    if (jsonData.resultCode !== 200) {
      throw new Error(`Error: ${jsonData.resultMessage}`);
    }

    return jsonData.data.classes;
  } catch (error) {
    console.error("Failed to fetch class data:", error);
    throw error;
  }
};

export const fetchClassById = async (id: number): Promise<Class> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBaseUrl) {
      throw new Error("API base URL is not defined");
    }

    const response = await fetch(`${apiBaseUrl}api/class/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const jsonData: ClassDetailResponse = await response.json();

    if (jsonData.resultCode !== 200) {
      throw new Error(`Error: ${jsonData.resultMessage}`);
    }

    return jsonData.data.class;
  } catch (error) {
    console.error(`Failed to fetch class with ID ${id}:`, error);
    throw error;
  }
};



"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Button } from "./button";

interface CardProps {
  title: string;
  date: string;
  participants: string;
  rating: string;
  status: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
}

const CardHomepage: React.FC<CardProps> = ({
  title,
  date,
  participants,
  rating,
  status,
  src,
}): JSX.Element => {
  return (
    <Card className="w-[350px] shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="p-0">
        <div className="w-full h-[300px] relative ">
          <Image
            src={src}
            alt={title}
            width={400}
            height={400}
            className="rounded-t-lg h-[300px] bg-gradient-to-b from-transparent to-[#3498DB]/20"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
              <p className="text-sm text-gray-500">{date}</p>
              <p className="text-sm text-gray-500">{participants} Peserta</p>
            </div>
            <div className="items-start">
              <div className="flex flex-row items-center mt-2">
                <div className="mr-1">
                  <Image
                    src="/image/homepage/rating.png"
                    alt="Left Star"
                    width={15}
                    height={15}
                  />
                </div>
                <div>
                  <p className="text-gray-400 font-semibold">{rating}/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end mr-0 p-2 mb-2">
        <Button className="mt-4 bg-blue-400 text-white py-2  rounded-full hover:bg-blue-300">
          {status}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardHomepage;

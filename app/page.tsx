import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-gray">
      <div className="bg-white rounded-lg max-h-[450px] max-w-[300px] flex flex-col items-center justify-center p-2 shadow-lg">
        <div>
          <Image
            src={"/image-qr-code.png"}
            alt=""
            width={270}
            height={270}
            className="rounded"
            priority
          />
        </div>
        <div className="p-7 mt-1">
          <div className="text-dark-blue font-extrabold text-center text-lg">
            Improve your front-end skills by building projects
          </div>
          <div className="text-gray-500 text-center text-xs mt-1">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </main>
  );
}

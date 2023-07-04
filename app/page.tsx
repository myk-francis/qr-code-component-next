import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 xl:p-24 bg-light-gray">
      <div className="bg-white rounded-lg h-[500px] mt-10 xl:mt-0 w-full xl:max-h-[450px] xl:max-w-[300px] flex flex-col items-center justify-center p-2 shadow-lg">
        <div>
          <Image
            src={"/image-qr-code.png"}
            alt=""
            width={270}
            height={270}
            className="rounded mt-1"
            priority
          />
        </div>
        <div className="p-4 mt-1">
          <div className="text-dark-blue font-extrabold text-center text-lg">
            Improve your front-end skills by building projects
          </div>
          <div className="text-gray-400 text-center text-sm mt-1">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </main>
  );
}

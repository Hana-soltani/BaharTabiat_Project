


function Herosection() {
    return (
        <div className="relative  flex flex-col lg:flex-row items-center justify-between px-6 py-[70%] lg:px-24 md:py-12 overflow-visible bg-gradient-to-br from-[#e8ede4] to-[#d8e0d0] ">

            {/* سمت چپ - دایره و عکس */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center overflow-visible">

                {/* دایره رنگی پشت عکس */}
                <div className="w-[480px] h-[480px]  md:w-[400px] md:h-[400px] xl:mt-5 -mt-[60%] rounded-full bg-gradient-to-br from-[#8bc34a] to-[#a8d86c] shadow-2xl"></div>

                {/* عکس - بیرون زدن از بالا */}
                <img
                    className="absolute -mt-[50%]  md:top-7 w-[60%] md:w-[75%] "
                    src="/Photos/InShot_20260523_150941833 (1).png"
                    alt=""
                />

            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-right xl:text-right  mt-24 lg:mt-0 xl:space-y-6  ">
                <p className="text-[#8bc34a] text-lg font-extrabold  ">ثبت منحصر به فرد</p>
                <h1 className="text-3xl md:text-6xl lg:text-5xl whitespace-nowrap font-black text-gray-800 mt-2">
                    از تولد تا تغییر هویت
                </h1>
                <p className="text-gray-500  text-lg   xl:text-right xl:justify-center font-medium md:text-lg mt-4">
                    هر برگ هویتی یک داستان دارد، ما مسیر درست روایت آن را به شما نشان می دهیم
                    از اصلاح شناسنامه تا دریافت کارت هوشمند، مسیر اداری رو با خیال راحت به ما بسپارید
                </p>


                <button className="mt-3 bg-[#8bc34a] hover:bg-[#7ab83a]  transition-transform  duration-500 hover:scale-105 px-8 py-3 rounded-full text-white font-bold text-md shadow-lg">
                    تماس با ما
                </button>
            </div>

        </div>
    );
}

export default Herosection;






import SliderImage from "./slider-image";

export default function Slider() {
    return (
        <div className="w-full overflow-hidden flex">
            <ul className="flex  gap-4 md:gap-10  md:animate-none">
                <SliderImage src={`/static/tech/ts.png`} alt="logo do do typescript">
                </SliderImage>

                <SliderImage src={`/static/tech/python.png`} alt="logo do do typescript">
                </SliderImage>

                <SliderImage src={`/static/tech/wordpress.png`} alt="logo do do typescript">
                </SliderImage>
                <SliderImage src={`/static/tech/docker.png`} alt="logo do do typescript">
                </SliderImage>

                <SliderImage src={`/static/tech/clickup.png`} alt="logo do do typescript">
                </SliderImage>
            </ul>
        </div>
    )
}
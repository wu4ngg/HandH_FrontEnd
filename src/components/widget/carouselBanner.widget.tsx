import React from "react";
import { Carousel } from "react-responsive-carousel";


const CarouselBanner: React.FC = () => {
    return (<>
        {/* https://www.npmjs.com/package/react-responsive-carousel */}
        <Carousel className="carousel-banner rounded-3xl" autoPlay showThumbs={false} showStatus={false}>
            <div>
                <img className="round-lg" alt="Sự kiện 1" src="/src/assets/image/banner.png" />
                <p className="legend">Sự kiện 1: Giới thiệu sản phẩm mới với các tính năng nổi bật và ưu đãi đặc biệt.</p>
            </div>
            <div>
                <img className="round-lg" alt="Sự kiện 2" src="/src/assets/image/banner.png" />
                <p className="legend">Sự kiện 2: Khuyến mãi mùa hè với giảm giá lên đến 50% cho các sản phẩm yêu thích.</p>
            </div>
            <div>
                <img className="round-lg" alt="Sự kiện 3" src="/src/assets/image/banner.png" />
                <p className="legend">Sự kiện 3: Hội thảo trực tuyến về công nghệ mới và các xu hướng trong ngành.</p>
            </div>
            <div>
                <img className="round-lg" alt="Sự kiện 4" src="/src/assets/image/banner.png" />
                <p className="legend">Sự kiện 4: Cuộc thi sáng tạo dành cho các nhà thiết kế và lập trình viên trẻ.</p>
            </div>
            <div>
                <img className="round-lg" alt="Sự kiện 5" src="/src/assets/image/banner.png" />
                <p className="legend">Sự kiện 5: Triển lãm công nghệ với các sản phẩm và dịch vụ mới nhất.</p>
            </div>
            <div>
                <img className="round-lg" alt="Sự kiện 6" src="/src/assets/image/banner.png" />
                <p className="legend">Sự kiện 6: Ngày hội thể thao doanh nghiệp với các hoạt động và trò chơi hấp dẫn.</p>
            </div>


        </Carousel>

    </>)
}

export default CarouselBanner
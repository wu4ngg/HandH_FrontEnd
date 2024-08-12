import React from "react";

const Home: React.FC = () => {
    return (
        <div className="home-page ">
            <div className="home-banner ">
                <div className="home-banner-wrap flex relative">
                    <div className="home-image-banner ">
                        <img src="\src\assets\image\banner.png" alt="" />
                    </div>
                    <div className="home-banner-opacity bg-white opacity-45 absolute w-screen  h-screen">
                    </div>
                    <div className="home-text-banner absolute ">
                        <div className="home-banner-text">
                            <p>SẢN PHẨM <p>Linen</p> CHẤT LƯỢNG NHẤT CHO MỌI NGƯỜI</p>
                        </div>
                        <div className="home-banner-button ">
                            <div className="banner-button_explore">
                                <input type="button" value="Khám phá cửa hàng" />
                            </div>
                            <div className="banner-button_contact">
                                <input type="button" value="Liên hệ chúng tôi" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Home
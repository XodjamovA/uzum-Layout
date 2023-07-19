import React from "react";

const Layout = ({ children }) => {
    return (
        <footer>
            <header>
                <div className="flex items-center justify-around w-[100%] bg-[#e9e9e9] px-[100px] py-[3px]">
                    <div className="w-25 flex items-center justify-between gap-4">
                        <img src="./public/icons/14.svg" className="w-[25px] mr-[-5px]" alt="" />
                        <p>Город: <span className="underline">Ташкент</span></p>
                        <a href="">Пункты выдачи</a>
                    </div>
                    <div>
                        Доставим ваш заказ бесплатно-всего за один день!
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <p>Вопрос-ответ</p>
                        <p>Мои заказы</p>
                        <div className="pl-[25px] flex justify-between items-center">
                            <img src="./public/icons/4.jpg" className="w-[30px]" alt="" />
                            <p name="" id="">Русский</p>
                        </div>
                    </div>
                </div>


                <div className="w-[1325px] mx-auto flex justify-around items-center">

                    <img src="./public/icons/2.jpg" alt="" className="w-[215px]" />

                    <button className="ml-[-50px]">
                        Каталог
                    </button>
                    <form className="flex outline-none border-x-[1px] border-y-[1px] border-[#c4c4c4] rounded-[3px]">
                        <input type="text" placeholder="Искать товары и категории" className="w-[500px] py-[5px] pr-[40px] pl-[5px] ml-[-100px]" name="" id="" />
                        <img src="./public/icons/3.png" alt="" className="w-[40px]" />
                    </form>


                    <div className="w-[250px] flex justify-between items-center">
                        <div className="flex justify-between] items-center ml-[-40px]">
                            <img src="./public/icons/5.svg" className="w-[25px]" alt="" />
                            <a href="">Войти</a>
                        </div>
                        <div className="flex justify-between] items-center">
                            <img src="./public/icons/6.svg" className="w-[25px]" alt="" />
                            <a href="">Избранное</a>
                        </div>
                        <div className="mr-[10px] flex justify-between items-center">
                            <img src="./public/icons/7.svg" className="w-[25px]" alt="" />
                            <a href="">Корзина</a>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between w-[1200px] gap-1 mx-auto mt-[-20px]">
                    <img src="./public/icons/1.png" className="w-[25px]" alt="" /><b>Халявная рассрочка</b>
                    <a className="text-sm" href="">Электроника</a>
                    <a className="text-sm" href="">Бытовая техника</a>
                    <a className="text-sm" href="">Одежда</a>
                    <a className="text-sm" href="">Обувь</a>
                    <a className="text-sm" href="">Аксессуары</a>
                    <a className="text-sm" href="">Красота</a>
                    <a className="text-sm" href="">Здоровье</a>
                    <a className="text-sm" href="">Товары для дома</a>
                    <a className="text-sm" href="">Строительство и ремонт</a>
                    <button>И еще↓</button>


                </div>
            </header>

            <footer className="mt-[300px]">
                <div className="w-[1200px] mx-auto flex justify-between items-center">
                    <div className="mt-[-100px]">
                        <b>О нас</b>
                        <p className="text-xs my-1">Пункты выдачи</p>
                        <p className="text-xs">Вакансии</p>

                    </div>

                    <div className="mt-[-100px]">
                        <b>Пользователям</b>
                        <p className="text-xs my-1">Связаться с нами</p>
                        <p className="text-xs">Вопрос - Ответ</p>
                    </div>
                    <div className="mt-[-100px]">
                        <b>Для предпринимателей</b>
                        <p className="text-xs my-1">Продавайте на Uzum</p>
                        <p className="text-xs">Вход для продавцов</p>
                    </div>
                    <div className="">
                        <div className="flex-column gap-2">
                            <b>Скачать приложение</b>
                            <div className="flex justify-between items-center gap-2 my-[10px]">
                                <div className="flex justify-between items-center w-[80px]">
                                    <img src="./public/icons/8.png" className="w-[18px]" alt="" />
                                    <p className="text-sm">AppStore</p>
                                </div>
                                <div className="flex justify-around items-center w-[100px]">
                                    <img src="./public/icons/9.png" className="w-[18px]" alt="" />
                                    <p className="text-sm">Google Play</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[50px]">
                            <b>Uzum в соцсетях</b>
                            <div className="flex justify-between items-center w-[150px] gap-1">
                                <img src="./public/icons/10.jpg" className="w-[40px]" alt="" />
                                <img src="./public/icons/11.jpg" className="w-[40px]" alt="" />
                                <img src="./public/icons/12.png" className="w-[50px]" alt="" />
                                <img src="./public/icons/13.png" className="w-[50px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[1200px] mx-auto flex justify-between items-center gap-1 border-t-[1px] border-[#c4c4c4] mt-[100px] py-[10px]">
                    <div className="text-sm"><b>Соглашение о конфиденциальности
                        Пользовательское соглашение</b></div>
                    <div className="right">
                        <p className="text-sm">«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
                    </div>
                </div>
            </footer>

        </footer>
    )
}

export default Layout
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperModuleStyle } from '../../styled-components/body/Swiper.js';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwipeCard } from '../../styled-components/body/Swiper.js';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import WidthChecker from '../general/WidthChecker.js';
import size from '../../styled-components/general/sizes.js';
const slideInfos = [
    { id: 1, img: '/img/person-1.png', name: 'Abigail', phrase: "A The Luxury redefine o que é viajar com estilo e conforto. Um serviço inigualável!" },
    { id: 2, img: '/img/person-2.png', name: 'Josh', phrase: "Pedi um táxi da The Luxury depois de um dia exaustivo... Cara, que mordomia! Me senti um rei!" },
    { id: 3, img: '/img/person-3.png', name: 'Sophie', phrase: "Nada como ouvir uma boa música, no ar condicionado, depois de um dia de trabalho. The Luxury, vocês salvaram minha noite!" },
    { id: 4, img: '/img/person-4.png', name: 'Mila', phrase: "Quando o motorista abriu a porta pra mim e ainda me desejou um bom dia, aí percebi que estava na The Luxury. Que tratamento!" }
];
const SwiperModule = () => {
    return (_jsxs(SwiperModuleStyle, { id: "depoiments", children: [_jsx("h1", { children: "Depoimento de clientes da The Luxury" }), _jsx(Swiper, { modules: [A11y, Autoplay], spaceBetween: 20, slidesPerView: WidthChecker(size.tablet) ? 3 : 2, loop: true, autoplay: { delay: 2500, disableOnInteraction: false }, children: slideInfos.map((item) => (_jsx(SwiperSlide, { children: _jsxs(SwipeCard, { children: [_jsx("div", { children: _jsx("img", { src: item.img, alt: item.name }) }), _jsxs("div", { children: [_jsx("h1", { children: item.name }), _jsx("p", { children: item.phrase })] })] }) }, item.id))) })] }));
};
export default SwiperModule;
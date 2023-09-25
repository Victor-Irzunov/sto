import React, { useContext } from 'react'
import TablePrice from '../components/tablePrice/TablePrice'
import { LineOutlined } from '@ant-design/icons'
import { Context } from '../App'
import { useScreens } from '../Constants/constants'
import ContenPriceSection from '../components/contenPriceSection/ContenPriceSection'

function PricePage() {
	const { data } = useContext(Context)
	const screens = useScreens()
	return (
		<section id='price' className='border-b border-[#2db9fb]'>
			<div className={data ? 'fon3-mobile' : 'fon3'}>
				<div className='h-20'></div>
				<div className='container'>
					<div className='text-center'>
						<h3 className='text-[#fff] text-4xl uppercase'>Услуги нашего сто</h3>
						<p className='text-white font-light uppercase xz:text-sm sd:text-base'>
							При последующем ремонте диагностика бесплатно
						</p>
						<p className='text-white text-center font-light mt-8 xz:text-sm sd:text-base'>
							Наши услуги по ремонту автомобилей охватывают всё, от общего технического обслуживания до сложных механических вмешательств. Мы стремимся не только восстановить ваш автомобиль, но и улучшить его производительность и безопасность на дорогах.
						</p>
						<p className='text-white text-center font-light xz:text-sm sd:text-base'>
							Гарантия на наши работы - это не просто обещание, а наше обязательство перед каждым клиентом. Мы уделяем особое внимание деталям и качеству каждой операции, чтобы ваш автомобиль возвращался на дорогу в отличном состоянии. Наша цель - обеспечить вас надежным и комфортным автомобилем, который будет служить вам долгие годы.
						</p>
					</div>
					<div className={`sd:mt-20 xz:mt-10 ${screens.xs ? 'pl-3 pr-1 py-1' : 'px-8'}`}>
						<TablePrice />
					</div>
				</div>
				<div className='h-20'/>
			</div>
		</section>
	)
}
export default PricePage
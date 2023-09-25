import { Table, Image } from 'antd'
import React, { useState } from 'react'
import { DownOutlined, RightOutlined } from '@ant-design/icons'
import imageGajka from '../../images/foto-price/1.webp'
import imageSupport from '../../images/foto-price/2.webp'
import imageVtulka from '../../images/foto-price/3.webp'
import imageAmortizator from '../../images/foto-price/4.webp'
import imageRichag from '../../images/foto-price/5.webp'
import imageDiagnostik from '../../images/foto-price/6.webp'
import imageLampa from '../../images/foto-price/7.webp'
import imageSharov from '../../images/foto-price/8.webp'
import imagepodshipnik from '../../images/foto-price/9.webp'
import imageRulNakonech from '../../images/foto-price/10.webp'
import imageShrus from '../../images/foto-price/11.webp'
import imageKomputer from '../../images/foto-price/12.webp'
import imageMaslo from '../../images/foto-price/13.webp'
import imageGrm from '../../images/foto-price/14.webp'
import imageGlush from '../../images/foto-price/15.webp'
import imageSceple from '../../images/foto-price/16.webp'
import imageTorSistema from '../../images/foto-price/17.webp'
import imageKoleso from '../../images/foto-price/18.webp'
import img19 from '../../images/foto-price/19.webp'
import img20 from '../../images/foto-price/20.webp'
import img21 from '../../images/foto-price/21.webp'
import img22 from '../../images/foto-price/22.webp'
import img23 from '../../images/foto-price/23.webp'
import img24 from '../../images/foto-price/24.webp'
import img25 from '../../images/foto-price/25.webp'
import img26 from '../../images/foto-price/26.webp'
import img27 from '../../images/foto-price/27.webp'
import img28 from '../../images/foto-price/28.webp'
import img29 from '../../images/foto-price/29.webp'
import img30 from '../../images/foto-price/30.webp'
import img31 from '../../images/foto-price/31.webp'
import img32 from '../../images/foto-price/32.webp'
import img33 from '../../images/foto-price/33.webp'
import img34 from '../../images/foto-price/34.webp'
import img35 from '../../images/foto-price/35.webp'
import img36 from '../../images/foto-price/36.webp'
import img37 from '../../images/foto-price/37.webp'
import img38 from '../../images/foto-price/38.webp'
import img39 from '../../images/foto-price/39.webp'
import img40 from '../../images/foto-price/40.webp'
import img41 from '../../images/foto-price/41.webp'
import img42 from '../../images/foto-price/42.webp'
import img43 from '../../images/foto-price/43.webp'
import img44 from '../../images/foto-price/44.webp'

const columns = [
	{
		title: <span className='font-bold'>Наименование</span>,
		dataIndex: 'name',
		key: 'name',
	},
	// {
	// 	title: <span className='font-bold'>Стоимость (руб)</span>,
	// 	dataIndex: 'price',
	// 	key: 'price',
	// 	align: 'center',
	// },
	Table.EXPAND_COLUMN,
]
const data = [
	{
		'Диагностика автомобиля': [
			{
				key: 1,
				name: 'Диагностика подвески',
				time: 'от 1:00',
				price: "15,00",
				description: 'Полная проверка задней и передней подвески.',
				image: imageDiagnostik,
			},
			{
				key: 2,
				name: 'Диагностика двигателя',
				time: 'от 50:00',
				price: "от 50,00",
				description: 'Полная проверка двигателя',
				image: img27,
			},
			{
				key: 3,
				name: 'Компьютерная диагностика',
				time: 'от 50:00',
				price: "от 50,00",
				description: 'Полная проверка двигателя и электрооборудования',
				image: imageKomputer,
			},
		]
	},
	{
		'Техническое обслуживание автомобиля': [
			{
				key: 1,
				name: 'Замена масла и фильтров',
				time: 'от 1:00',
				price: "15,00",
				description: '',
				image: imageMaslo,
			},
			
			{
				key: 2,
				name: 'Проверка и замена трансмиссионной жидкости',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img28,
			},
			{
				key: 3,
				name: 'Проверка и замена жидкости в системе охлаждения',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img29,
			},
			{
				key: 4,
				name: 'Проверка и замена тормозной жидкости',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img30,
			},
			{
				key: 5,
				name: 'Проверка и регулировка тормозных механизмов',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: imageTorSistema,
			},
			{
				key: 6,
				name: 'Проверка и замена ремней привода',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: imageGrm,
			},
			{
				key: 7,
				name: 'Проверка и замена свечей накаливания (для дизельных двигателей)',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img31,
			},
			{
				key: 8,
				name: 'Проверка и замена свечей зажигания',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img22,
			},
			{
				key: 9,
				name: 'Проверка состояния и замена аккумулятора',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img32,
			},
			{
				key: 10,
				name: 'Проверка и замена подшипников колес и амортизаторов (по необходимости)',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img33,
			},
			{
				key: 11,
				name: 'Проверка и замена стеклоомывателя и стеклоочистителей',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img34,
			},
		]
	},
	{
		'Ремонт подвески': [
			{
				key: 1,
				name: 'Диагностика подвески',
				time: 'от 1:00',
				price: "15,00",
				description: 'Полная проверка задней и передней подвески.',
				image: imageDiagnostik,
			},
			{
				key: 2,
				name: 'Замена шаровой опоры',
				time: 'от 1:00',
				price: "от 30,00",
				description: 'Цена зависит от время потраченного на снятие старой шаровой.',
				image: imageSharov,
			},
			{
				key: 3,
				name: 'Замена ступичного подшипника',
				time: 'от 50:00',
				price: "от 50,00",
				description: 'Время и цена зависит от время потраченного на снятие старого подшипника.',
				image: imagepodshipnik,
			},
			{
				key: 4,
				name: 'Замена пружин и(или) опорных подшипников',
				time: 'от 1:00',
				price: "от 45,00",
				description: 'Время и цена зависит от время потраченного на снятие амортизатора.',
				image: imageAmortizator,
			},
			{
				key: 5,
				name: 'Замена рулевых наконечников',
				time: 'от 1:00',
				price: "от 20,00",
				description: 'Время и цена зависит от время потраченного на снятие старого наконечника.',
				image: imageRulNakonech,
			},
			{
				key: 6,
				name: 'Замена шруса',
				time: 'от 1:00',
				price: "от 50,00",
				description: 'Время и цена зависит от состояния старого шруса.',
				image: imageShrus,
			},
			{
				key: 7,
				name: 'Замена рычагов подвески ( салейнтблоков)',
				time: 'от 1:00',
				price: "от 35,00",
				description: 'Время и цена зависит от состояния старого шруса.',
				image: imageDiagnostik,
			},
		]
	},
	{
		'Ремонт двигателя': [
			{
				key: 1,
				name: 'Замена масла',
				time: 'от 1:00',
				price: "от 25,00",
				description: 'Замена масла в двигателе.',
				image: imageMaslo,
			},
			{
				key: 2,
				name: 'Замена ремня ГРМ',
				time: 'от 1:00',
				price: "от 180,00",
				description: 'Замена всех роликов и ремня.',
				image: imageGrm,
			},
			{
				key: 3,
				name: 'Замена прокладки ГБЦ',
				time: 'от 1:00',
				price: "от 200,00",
				description: '',
				image: img19,
			},
			{
				key: 4,
				name: 'Замена прокладки поддона',
				time: 'от 1:00',
				price: "от 50,00",
				description: '',
				image: img20,
			},
			{
				key: 5,
				name: 'Замена прокладки клапанной крышки',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: img21,
			},
			{
				key: 6,
				name: ' Замена свечей зажигания',
				time: 'от 1:00',
				price: "от 30,00",
				description: '',
				image: img22,
			},
			{
				key: 7,
				name: 'Замер компрессии',
				time: 'от 1:00',
				price: "от 45,00",
				description: '',
				image: img23,
			},
			{
				key: 8,
				name: 'Снятие - установка стартера, генератора',
				time: 'от 1:00',
				price: "от 45,00",
				description: '',
				image: img24,
			},

		]
	},
	{
		'Ремонт рулевого управления': [
			{
				key: 1,
				name: 'Ремонт гидроусилителя руля',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img39,
			},
			{
				key: 2,
				name: 'Регулировка или замена рулевых наконечников и тяг',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: imageRulNakonech,
			},
		]
	},
	{
		'Ремонт системы охлаждения': [
			{
				key: 1,
				name: 'Диагностика и поиск (ремонт) протечки антифриза',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img35,
			},
			{
				key: 2,
				name: 'Замена патрубков, радиатора, расширительного бачка',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img36,
			},
			{
				key: 3,
				name: 'Замена термостата и (или) датчика температуры',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img37,
			},
			{
				key: 4,
				name: 'Замена помпы',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img38,
			},
			
		]
	},
	{
		'Ремонт глушителя': [
			{
				key: 1,
				name: 'Замена банок, сварка',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: imageGlush,
			},
		]
	},
	{
		'Ремонт электрооборудования': [
			{
				key: 1,
				name: 'Замена ламп, ремонт фар',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: imageLampa,
			},
			{
				key: 2,
				name: 'Диагностика и ремонт генератора и стартера',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img40,
			},
			{
				key: 3,
				name: 'Диагностика и ремонт системы зажигания, включая свечи зажигания и катушки',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img41,
			},
			{
				key: 4,
				name: 'Ремонт электрических стеклоподъемников и замков дверей',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img42,
			},
			{
				key: 5,
				name: 'Ремонт системы зарядки аккумулятора',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: img43,
			},
		]
	},
	// {
	// 	'Ремонт коробки передач': [
	// 		{
	// 			key: 1,
	// 			name: 'Замена комплекта сцепления (  заднего сальника коленвала)',
	// 			time: 'от 1:00',
	// 			price: "от 250,00",
	// 			description: 'Цена зависит нужна ли замена корзины и выжимного подшипника.',
	// 			image: imageSceple,
	// 		},
	// 		{
	// 			key: 2,
	// 			name: 'Замена масла в МКПП',
	// 			time: 'от 1:00',
	// 			price: "от 35,00",
	// 			description: '',
	// 			image: img25,
	// 		},
	// 		{
	// 			key: 3,
	// 			name: 'Частичная замена масла в АКПП',
	// 			time: 'от 1:00',
	// 			price: "от 40,00",
	// 			description: '',
	// 			image: img26,
	// 		},
	// 		{
	// 			key: 4,
	// 			name: 'Замена прокладки поддона АКПП',
	// 			time: 'от 1:00',
	// 			price: "от 45,00",
	// 			description: '',
	// 			image: img26,
	// 		},
	// 	]
	// },
	{
		'Ремонт тормозной системы': [
			{
				key: 1,
				name: 'Замена передних тормозных колодок ',
				time: 'от 1:00',
				price: "от 35,00",
				description: 'Цена зависит от заменяемых элементов.',
				image: imageSupport,
			},
			{
				key: 2,
				name: 'Замена задних тормозных колодок',
				time: 'от 1:00',
				price: "от 40,00-60,00",
				description: 'Диски/Барабаны',
				image: imageSupport,
			},
			{
				key: 3,
				name: 'Переборка суппорта',
				time: 'от 1:00',
				price: "от 45,00",
				description: '',
				image: imageSupport,
			},
			{
				key: 4,
				name: 'Прокачка тормозной системы',
				time: 'от 1:00',
				price: "от 35,00",
				description: '',
				image: imageTorSistema,
			},
			{
				key: 5,
				name: 'Замена тормозных дисков',
				time: 'от 1:00',
				price: "от 50,00",
				description: '',
				image: imageTorSistema,
			},
			{
				key: 6,
				name: 'Замена тормозных трубок, шлангов',
				time: 'от 1:00',
				price: "от 25,00",
				description: '',
				image: imageTorSistema,
			},
			{
				key: 7,
				name: 'Замена троссов ручника',
				time: 'от 1:00',
				price: "от 50,00",
				description: '',
				image: imageTorSistema,
			},
		]
	},
	{
		'Шиномонтаж': [
			{
				key: 1,
				name: 'Переобувка зима/лето',
				time: 'от 1:00',
				price: "от 45,00",
				description: 'Время от состояния болтов крепления колеса.',
				image: img44,
			},
			{
				key: 2,
				name: 'Заклейка колеса',
				time: 'от 1:00',
				price: "от 15,00",
				description: 'Время и цена зависит от состояния болтов крепления колеса.',
				image: imageKoleso,
			},


		]
	},
]
const TablePrice = () => {
	const [active, setActive] = useState({
		'Диагностика автомобиля':false,
		'Техническое обслуживание автомобиля':false,
		'Ремонт системы охлаждения':false,
		'Ремонт рулевого управления':false,
		'Ремонт подвески': false,
		'Ремонт глушителя': false,
		'Ремонт электрооборудования': false,
		'Ремонт двигателя': false,
		'Ремонт коробки передач': false,
		'Ремонт тормозной системы': false,
		'Шиномонтаж': false,
	})
	const f1 = key => {
		for (let el in active) {
			if (el === key) setActive({ ...active, [key]: !active[key] })
		}
	}

	const color = '#fff'
	const text = 'text-[#fff]'
	return (
		<>
			{
				data.map((el, idx) => {
					return (
						<div key={idx}>
							<div
								className='flex justify-center mt-5 sd:mb-8 xz:mb-5'
								onClick={() => f1(Object.keys(el)[0])}
								key={idx}
							>

								<h3 className={`pr-2 mb-0 ${text} cursor-pointer uppercase xz:text-lg xy:text-xl sd:text-2xl text-center`}>
									{Object.keys(el)}
								</h3>
								{active[Object.keys(el)[0]] ?
									<DownOutlined style={{ fontSize: '.8em', color }} className='' />
									:
									<RightOutlined style={{ fontSize: '.8em', color }} className='' />
								}
							</div>
							{
								active[Object.keys(el)[0]] &&
								Object.values(el).map((elem, i) => {
									return (
										<Table
											columns={columns}
											key={i}
											pagination={false}
											expandable={{
												expandedRowRender: (record) => {
													return (
														<div style={{ display: 'flex' }}>
															<Image src={record.image} style={{ borderRadius: '2em' }} />
															<p style={{ margin: 0, paddingLeft: '2em' }}>
																{record.description}
															</p>
														</div>
													)
												},
											}}
											scroll={{
												x: 500,
											}}
											dataSource={elem}
										/>
									)
								})
							}
						</div>
					)
				})
			}
		</>
	)
}
export default TablePrice
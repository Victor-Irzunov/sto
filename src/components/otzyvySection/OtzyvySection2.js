import React, { useState } from 'react'
import { Button, Popover, Rate, Avatar, Image } from 'antd'
import { ExclamationCircleOutlined, ExclamationOutlined, LineOutlined, UserOutlined } from '@ant-design/icons'
import { FormOtzyvy } from '../form2/FormOtzyvy'
// import img1 from '../../images/portfolio/12.webp'


const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв клиента нашего СТО и после проверки модератора.</p>
	</div>
)

export const OtzyvySection2 = () => {
	const [add, setAdd] = useState(false)



	return (
		<section className='py-12 w-full z-10 bg-white min-h-[60vh]' id='otzyvy'>
			<div className='container px-10'>
				<div className='text-center sd:mb-12 xz:mb-5'>
					<h5 className='text-4xl text-[#2db9fb] uppercase'>Наши<span className='text-black'> отзывы</span></h5>
					<LineOutlined style={{ color: '#2db9fb', fontSize: '3rem' }} />
				</div>

				<p className='text-black  text-center'>
					Узнать, что о нас думают наши клиенты, - это важная часть нашей работы. Мы гордимся положительными отзывами и благодарны за доверие, которое нам оказывают наши клиенты. Вот лишь несколько из сотни отзывов, которые мы получили за годы нашей деятельности:
				</p>
				<div className='mt-20'>
					<div className='border-b pb-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									И
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Чекун Игорь</p>
								<p className='text-xs mb-1'>Audi A6</p>
								<p className='text-[10px] text-gray-400'>10.06.2019</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Моя старенькая машинка привезла меня на СТО с громким скрипом и тяжелым дыханием, а они сделали ее снова молодой! Очень благодарен за волшебство!
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>
									Уважаемый клиент,
									Мы очень рады, что смогли привести вашу старенькую машину к жизни! Спасибо за доверие и выбор нашей станции. Наши мастера всегда готовы помочь вам с волшебством на дороге!
								</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Луцевич Мария</p>
								<p className='text-xs mb-1'>Nissan Juke</p>
								<p className='text-[10px] text-gray-400'>23.08.2020</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Моя жена привезла свой автомобиль на СТО, и, честно говоря, я был в шоке от звука двигателя. Но спустя некоторое время она вернулась с улыбкой на лице - машина едет, как новая!
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>
									Уважаемый клиент,

									Мы рады, что смогли удивить вас своей работой! Ваше довольство - наша главная награда. Пусть вашей жене всегда сопутствует радость и безопасность на дорогах!
								</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									И
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Бакун Игорь</p>
								<p className='text-xs mb-1'>BMW E60</p>
								<p className='text-[10px] text-gray-400'>10.02.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Я здесь не только обслуживаю свой автомобиль, но и всегда получаю честные советы и рекомендации по уходу за ним. Это СТО, на которое можно полагаться.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>
									Уважаемый клиент,
									Мы всегда стремимся к внимательному и заботливому обслуживанию. Ваши слова - лучшая награда для нас. Спасибо, что выбрали нас!
								</p>
							</div>
						</div>
					</div>

					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									М
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Ходосевич Марина</p>
								<p className='text-xs mb-1'>Mercedes</p>
								<p className='text-[10px] text-gray-400'>22.07.2022</p>
								<Rate allowHalf defaultValue={4.7} />

							</div>
							<div className='w-1/4'>
								<Image src='https://via.placeholder.com/150' className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Приехала на автосервис для замены тормозных колодок. Мне понравилось, что мастер сразу подсказал, какие работы действительно необходимы, и не навязывал лишних услуг. Очень честный подход.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за потраченное время на написание этого отзыва. Хороших дорог.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='text-center mt-16 mb-10 font-semibold xz:text-base sd:text-xl'>
					<p className=''>
						Мы ценим каждый отзыв и стремимся делать нашу работу еще лучше, чтобы вы могли наслаждаться безопасной и комфортной ездой. Спасибо, что выбираете нас!
					</p>
				</div>

				<div className='mt-14'>
					<div
						style={{
							marginBottom: 16,
						}}
						className='flex items-center justify-end'
					>

						<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
							<ExclamationOutlined className='text-xl mr-5 text-[#2db9fb]' />
						</Popover>
						<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
					</div>
				</div>

				{
					add && <FormOtzyvy setAdd={setAdd} />
				}
			</div>
		</section>
	)
}

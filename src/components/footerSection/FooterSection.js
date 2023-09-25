import React, { useState, useContext } from 'react'
import { DrawerComp } from '../drawerComp/DrawerComp'
import { Context } from '../../App'

export const FooterSection = () => {
	const [open, setOpen] = useState(false)
	const { data } = useContext(Context)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})
	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}

	return (
		<section className=' w-full z-10 relative' id='contact'>
			<div className={data ? 'fon2-mobile' : 'fon2'}>
				<div className='container mx-auto text-center pt-7 pb-2'>
					<div className=''>
						<h2 className='text-xl text-white uppercase tracking-wider'>
							Качественное<span className='text-[#fb4f41]'> СТО</span>  в Минске
						</h2>
					</div>
					<div className=''>
						<p className='text-white font-light text-sm'>
							Предлагаем профессональную диагностику и качественный ремонт Вашего автомобиля.</p>
					</div>

					<h3 className='text-white  font-light uppercase mt-5'>Записаться на ремонт</h3>

					<div className='text-[#fb4f41] mb-6 text-center w-full'>
						<div className=''>

							<a href='tel:80299402790' className='text-3xl'>+375 29 940-27-90</a>

						</div>
						<div className='mt-3'>

							<a href='tel:80298781511' className='text-3xl'>+375 29 878 15 11</a>

						</div>
					</div>

					<div className='text-white font-light mt-10 text-sm'>
						<p className='uppercase font-semibold'>
							Наши реквизиты
						</p>
						<p className=''>
							ООО "АвтоСтройФорсаж"
						</p>
						<p className=''>
							220099 Республика Беларусь
						</p>
						<p className=''>
							г. Минск ул. Лейтенанта Кижеватова дом 8 пом. 1
						</p>
						<p className=''>
							УНП 193686306
						</p>
						<p className=''>
							р/с BY67MTBK 3012 0001 0933 0011 9921
						</p>
						<p className=''>
							в ЗАО "МТБанк" БИК МТВКBY2X
						</p>
						<p className=''>
							директор Купрейчик В.В.
						</p>
						<p className=''>
							forsageavto@gmail.com
						</p>

					</div>

					<div className="
    w-full 
    flex
    justify-center
    items-center 
    md:flex-row
    flex-col 
    sm:pt-4 
    xx:pt-1
    border-t-[1px]
    border-t-[#3F3E45]
	 mt-10
    ">
						<p className="
      font-poppins
      font-normal
      text-center
      sm:text-[14px]
      xy:text-[10px]
      text-white
    text-gray-400/50
		mb-0 leading-3 pt-1
      ">
							Copyright Ⓒ 2018-2023. Разработка и продвижение
							<a href="https://vi-tech.by" className="text-cyan-500" target="_blank"> VI:TECH</a>
							. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
						</p>
					</div>
				</div>
			</div>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</section>
	)
}

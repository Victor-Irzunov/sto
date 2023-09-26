import React, { useState } from 'react'
import { Button, Image } from 'antd'
import { motion } from "framer-motion"
import { Link as LinkScroll } from 'react-scroll'
import { PhoneOutlined, ShakeOutlined, CalendarOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawerComp/DrawerComp'

export const MenuMobil = ({ onClose }) => {
	const [open, setOpen] = useState(false)

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
		<div className='max-h-screen'>
			<nav className='text-center flex flex-col justify-between'>
				<ul className='h-[30vh] uppercase flex flex-col justify-between items-center text-lg cursor-pointer'>
					<li>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Главная
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='price'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Услуги
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='otzyvy'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Отзывы
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='vopros'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Вопрос-ответ
						</LinkScroll>
					</li>
				
					<li>
						<LinkScroll to='contact'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Контакты
						</LinkScroll>
					</li>
				</ul>
				<div className='mt-3'>
				<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A71eb39e88f70668156d37b8eea3f6194285f9afdd05cbff0a87052917282fa8b&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
				</div>

				<div className='flex justify-between absolute bottom-3'>
					<Button type='primary' className='mr-2' onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}>
						<ShakeOutlined /> Заказать звонок
					</Button>


					<Button type='primary' className='ml-2' onClick={() => showDrawer('right', 'Записаться на дату', 'date')}>
						<CalendarOutlined /> Записаться
					</Button>
				</div>
			</nav>
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}

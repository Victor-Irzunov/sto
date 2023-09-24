import React, { useState } from 'react'
import { Image, Popover, Affix, Badge } from 'antd'
import logo from '../../../images/logo.webp'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined, } from '@ant-design/icons'
import { useScreens } from '../../../Constants/constants'
import { DrawerComp } from '../../drawerComp/DrawerComp'

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	return (
		<>
			{
				screens.md
					?
					<div className='bg-white'>
						<div className='container mx-auto flex justify-between items-center py-2'>

							<div className='flex justify-start items-center'>
								<Image src={logo} preview={false} width='80px' />
							</div>

							<div className='flex flex-col text-sm items-start text-black'>
								<p className='uppercase  my-0'>вт-пт 9:00-18:00</p>
								<p className='uppercase  my-0.5'>сб-вс 10:00-16:00</p>
								<p className='uppercase  my-0.5'>пн - <span className='text-red-600'>выходной</span></p>
							</div>


							<div className=''>

								<div className='flex text-lg'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl' />
									<div className='flex items-end'>
										<a href='tel:8029' className='text-2xl'>+375 (29) 000-00-00</a>
										<span className='ml-1.5 font-extralight '>мтс</span>
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm mb-1'>Напишите нам</p>
								<div>
									<a href='https://t.me/@' rel="noreferrer" target='_blank'><Image src={telegram} style={{ width: '30px' }} preview={false} /></a>
									<a href='https://wa.me/37529?text=нужен%20ремонт%20' rel="noreferrer" target='_blank'><Image src={whatsapp}  preview={false} style={{ width: '30px', marginLeft: '8px' }} /></a>
									<a href='viber://chat?number=%2B37529' rel="noreferrer" target='_blank'><Image src={viber}  preview={false} style={{ width: '30px', marginLeft: '8px' }} /></a>
								</div>
							</div>
						</div>
					</div>
					:
					<div className='container mx-auto'>
					<div className='flex flex-col justify-between items-center pt-20 pb-1 relative z-10 bg-white'>
						<div className='flex flex-col text-sm items-center text-[#fb4f41]'>
							<p className='uppercase  my-0'>вт-пт 9:00-18:00</p>
							<p className='uppercase  my-0.5'>сб-вс 10:00-16:00</p>
							<p className='uppercase  my-0.5'>пн - <span className='text-red-700'> выходной</span></p>
						</div>
						<div className='mt-2 mb-3'>
							<div className='text-lg text-[#fb4f41]'>
								<div className='flex items-end pl-7'>
									<a href='tel:8029' className='text-2xl'>+375 (29) 000-00-00</a>
									<span className='ml-1 font-extralight text-[15px] text-red-600'>мтс</span>
								</div>
							</div>
						</div>

						<div className='flex flex-col items-center mb-2'>
							<p className='text-sm text-[#2db9fb] mb-3 uppercase cursor-pointer' onClick={() => showDrawer('top', 'Заказать звонок')}>
								<ShakeOutlined /> Заказать звонок
							</p>
							<div>
								<a href='https://t.me/@' rel="noreferrer" target='_blank'><Image src={telegram} preview={false} style={{ width: '30px' }} /></a>
								<a href='https://wa.me/37529?text=нужен%20ремонт%20' rel="noreferrer" target='_blank'><Image src={whatsapp} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
								<a href='viber://chat?number=%2B37529' rel="noreferrer" target='_blank'><Image src={viber} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
							</div>
						</div>

						<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
						</div>
						</div>
			}
			<DrawerComp open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}

import React, { useState } from 'react'
import { Image, Popover, Affix, Badge } from 'antd'
import logo from '../../../images/logo.webp'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined, } from '@ant-design/icons'
import { useScreens } from '../../../Constants/constants'
import { DrawerComp } from '../../drawerComp/DrawerComp'
import a1 from '../../../images/a1.svg'
import mts from '../../../images/mts.svg'

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
								<Image src={logo} preview={false} width='70px' />
							</div>

							<div className='flex flex-col text-sm items-start text-black'>
								<p className='uppercase  my-0'>пн-пт 9:00-19:00</p>
								<p className='uppercase  my-0.5'>сб-вс - <span className='text-red-600'>выходной</span></p>
							</div>


							<div className=''>

								<div className='flex text-lg'>
									<div className='flex items-start'>
										<a href='tel:80299402790' className='text-xl mr-2'>+375 29 940-27-90</a>
										<Image src={a1} preview={false} width={17} />
									</div>
								</div>
								<div className='flex text-lg'>
									<div className='flex items-center'>
										<a href='tel:80298781511' className='text-xl mr-2'>+375 29 878 15 11</a>
										<Image src={mts} preview={false} width={50} />
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm mb-1'>Напишите нам</p>
								<div>
									<a href='https://t.me/@' rel="noreferrer" target='_blank'><Image src={telegram} style={{ width: '30px' }} preview={false} /></a>
									<a href='viber://chat?number=%2B375298781511' rel="noreferrer" target='_blank'><Image src={viber} preview={false} style={{ width: '30px', marginLeft: '16px' }} /></a>
								</div>
							</div>
						</div>
					</div>
					:
					<div className='container mx-auto'>
						<div className='flex flex-col justify-center items-center pt-20 pb-1 relative z-10 bg-white'>
							<div className='flex flex-col text-sm items-center text-[#fb4f41]'>
								<p className='uppercase  my-0'>пн-пт 9:00-19:00</p>
								<p className='uppercase  my-0.5'>сб-вс - <span className='text-red-700'> выходной</span></p>
							</div>
							<div className='mt-2 mb-3 pl-8'>
								<div className='text-lg'>
									<div className='flex items-start mb-2'>
										<a href='tel:80299402790' className='text-2xl mr-2'>+375 29 940-27-90</a>
										<Image src={a1} preview={false} width={19} />
									</div>
									<div className='flex items-center'>
										<a href='tel:80298781511' className='text-2xl mr-2'>+375 29 878 15 11</a>
										<Image src={mts} preview={false} width={60} />
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center mb-2'>
								<p className='text-sm  mb-3 uppercase cursor-pointer' onClick={() => showDrawer('top', 'Заказать звонок')}>
									<ShakeOutlined /> Заказать звонок
								</p>
								<div>
									<a href='https://t.me/@' rel="noreferrer" target='_blank'><Image src={telegram} preview={false} style={{ width: '30px' }} /></a>
									<a href='viber://chat?number=%2B375298781511' rel="noreferrer" target='_blank'><Image src={viber} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
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

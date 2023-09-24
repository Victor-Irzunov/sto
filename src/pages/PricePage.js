import React, { useContext } from 'react'
import TablePrice from '../components/tablePrice/TablePrice'
import { LineOutlined } from '@ant-design/icons'
import { Context } from '../App'
import { useScreens } from '../Constants/constants'

function PricePage() {
	const { data } = useContext(Context)
	const screens = useScreens()
	return (
		<section id='price' className='border-b border-[#2db9fb]'>
			<div className={data ? 'fon3-mobile' : 'fon3'}>
				<div className='h-20'></div>
				<div className='container'>
					<div className='text-center'>
						<h2 className='text-[#fff] text-4xl '>Цены</h2>
						<p className='text-white font-light uppercase text-xs'>
							При последующем ремонте диагностика бесплатно
						</p>
						<LineOutlined style={{ color: '#2db9fb', fontSize: '3em' }} />
					</div>
					<div className={`mt-12 ${screens.xs ? 'pl-3 pr-1 py-1' : 'px-8'} rounded-3xl`}>
						<TablePrice />
					</div>
				</div>
				<div className='h-20'></div>
			</div>
		</section>
	)
}
export default PricePage
import React, { useContext } from 'react'
import { LineOutlined } from '@ant-design/icons'
import CollapseComp from '../components/collapse/CollapseComp'
import { useScreens } from '../Constants/constants'
import { Context } from '../App'
function VoprosOtvet() {
	const screens = useScreens()
	const { data } = useContext(Context)
	const color = '#2db9fb'
	return (
		<section id='vopros' className='border-b border-[#2db9fb]'>
			<div className={data ? 'fon2-mobile' : 'fon2'}>
				<div className='h-12'></div>
				<div className='container'>
					<div className='flex flex-col justify-between'>
						<div className='text-center'>
							<h6 className='text-white text-4xl'>
								Часто задаваемые вопросы
							</h6>
							<LineOutlined style={{ color, fontSize: '3em' }} />
						</div>
						<div className={screens.xs ? 'pl-1' : 'pl-10'}>
							<CollapseComp />
						</div>
						<div className='h-16'></div>
						
					</div>
				</div>
			</div>
		</section>
	)
}
export default VoprosOtvet
import ButtonArrowIcon from '@/icons/button.arrow.icon'
import { Button } from '../ui/button'
import type { GetIconProps } from './types.button'

function BgBrandColor({ title }: GetIconProps) {
	return (
		<Button
			variant={'default'}
			className='hover:bg-amber-500 text-white font-manrope pl-6 pr-1.25 py-4  text-base h-16 flex items-center gap-3 bg-brandcolor z-20'
		>
			{title}
			<div className='w-13.5 h-13.5 rounded-lg flex items-center justify-center ml-5 bg-white'>
				<ButtonArrowIcon iconcolor={'#f07c00'} />
			</div>
		</Button>
	)
}

export default BgBrandColor

import ButtonArrowIcon from '@/icons/button.arrow.icon'
import { Button } from '../ui/button'
import type { GetIconProps } from './types.button'

function BgWhiteBtn({ title }: GetIconProps) {
	return (
		<Button
			variant={'default'}
			className='hover:bg-gray-100 text-black font-manrope pl-6 pr-1.25 py-4  text-base h-16 flex items-center gap-3 bg-white'
		>
			{title}
			<div className='w-13.5 h-13.5 rounded-lg flex items-center justify-center ml-5 bg-brandcolor'>
				<ButtonArrowIcon iconcolor={'#fff'} />
			</div>
		</Button>
	)
}

export default BgWhiteBtn

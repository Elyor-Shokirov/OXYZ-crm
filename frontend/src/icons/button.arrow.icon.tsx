import type { IconColorProps } from './type-Icon-Color'

const ButtonArrowIcon = ({ iconcolor }: IconColorProps) => (
	<svg
		width={9}
		height={16}
		viewBox='0 0 9 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M1 1L8 8L1 15'
			stroke={iconcolor}
			strokeWidth={2}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
export default ButtonArrowIcon

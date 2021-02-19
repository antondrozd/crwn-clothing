import * as React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionItemType } from '../../types/shop.types'

import './collection-preview.styles.scss'

type PropsType = {
	title: string
	items: CollectionItemType[]
}

const CollectionPreview: React.FC<PropsType> = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title}</h1>
		<div className="preview">
			{items
				.filter((_, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
)

export default CollectionPreview

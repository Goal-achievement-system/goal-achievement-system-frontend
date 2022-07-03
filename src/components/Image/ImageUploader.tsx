/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { ReactComponent as Camera } from 'assets/icons/camera.svg';
import { ReactComponent as Union } from 'assets/icons/union.svg';
import { blobToBase64 } from 'utils/common';

interface Props {
	image: string | null;
	setImage: React.Dispatch<React.SetStateAction<string | null>>;
	width?: number;
	height: number;
	alt: string;
}

const fileTypes = ['JPG', 'PNG'];

function ImageUploader({ image, setImage, width, height, alt }: Props) {
	const [isDrag, setIsDrag] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const handleChange = (file: File) => {
		if (loading) return;
		setLoading(true);
		blobToBase64(file).then((base64BannerImage) => {
			setImage(base64BannerImage);
			setLoading(false);
		});
	};

	if (image) {
		return (
			<div className="relative rounded-[8px] overflow-hidden">
				<FileUploader
					handleChange={handleChange}
					name="file"
					types={fileTypes}
					onDraggingStateChange={(dragging: boolean) => setIsDrag(dragging)}
				>
					<div
						style={width ? { width: `${width}px`, height: `${height}px` } : { height: `${height}px` }}
						className="bg-gray-200 w-full"
					>
						<img alt={alt} src={image} className="w-full h-full object-contain object-center" />
					</div>
				</FileUploader>
				<Union
					fill="#000000"
					className="cursor-pointer absolute top-[14px] right-[14px]"
					onClick={() => setImage(null)}
				/>
			</div>
		);
	}

	return (
		<FileUploader
			handleChange={handleChange}
			name="file"
			types={fileTypes}
			onDraggingStateChange={(dragging: boolean) => setIsDrag(dragging)}
		>
			<div
				style={width ? { width: `${width}px`, height: `${height}px` } : { height: `${height}px` }}
				className="cursor-pointer border-[3px] border-[#E7E7E7] w-full rounded-[8px] flex justify-center flex-col items-center bg-primaryWhite border-dashed text-[#A6A6A6] text-[16px]"
			>
				{loading ? (
					<div>이미지 등록중입니다..</div>
				) : (
					!isDrag && (
						<>
							<Camera />
							<div className="mt-[12px]">이미지를 추가해주세요.</div>
						</>
					)
				)}
			</div>
		</FileUploader>
	);
}

export default ImageUploader;

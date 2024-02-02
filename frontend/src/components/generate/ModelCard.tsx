import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { IconCrown } from "@tabler/icons-react";

export default function ModelCard() {
	return (
		<div className="flex flex-col gap-2">
			<Card className="w-48 aspect-[3/4] overflow-hidden">
				<CardContent className="relative h-full n">
					<Image src={'/test.jpg'} fill={true} className="object-cover transition-all hover:scale-105 grayscale" alt="Model" />
					<Badge variant={"default"} className="absolute bottom-1 right-1 flex gap-1 px-1  font-bold tracking-normal"><IconCrown size={20}/>Premium</Badge>
				</CardContent>
			</Card>
			<h3 className="font-medium leading-none">My model</h3>
		</div>

	)
}
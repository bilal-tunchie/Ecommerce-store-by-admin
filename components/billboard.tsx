import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
};

const Billboard: React.FC<BillboardProps> = ({data}) => {

    return (
        <div className="py-4 sm:py-6 lg:py-8 rounded-xl overflow-hidden">
            <div
                className="rounded-xl relative aspect-square overflow-hidden md:aspect-[2.4/1] bg-cover"
                style={{backgroundImage: `url(${data?.imageUrl})`}}
            >
            </div>
        </div>
    )
}

export default Billboard
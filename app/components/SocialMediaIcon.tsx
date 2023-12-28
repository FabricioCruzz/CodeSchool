import { IconBaseProps } from "@react-icons/all-files";

interface SocialMediaIconProps{
    icon: IconBaseProps,
}

export default function SocialMediaIcon({ icon } : SocialMediaIconProps){
    return (
        <>
            {icon}
        </>
    )
};
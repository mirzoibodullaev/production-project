import { classNames } from "shared/lib/classNames/classNames";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/ui/Avatar";
import { Skeleton } from "shared/ui/Skeleton/ui/Skeleton";
import { AppLink } from "shared/ui/AppLink/ui/AppLink";
import { RouterPath } from "shared/config/routeConfig/routeConfig";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({
    className,
    comment,
    isLoading,
}: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        border="6px"
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton
                    border="4px"
                    className={cls.commentText}
                    width={"100%"}
                    height={50}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink
                to={`${RouterPath.profile}${comment?.user.id}`}
                className={cls.header}
            >
                {comment?.user.avatar ? (
                    <Avatar src={comment?.user.avatar} size={30} />
                ) : null}
                <span className={cls.username}>{comment?.user.username}</span>
            </AppLink>
            <p className={cls.commentText}>{comment?.text}</p>
        </div>
    );
};

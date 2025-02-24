import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/ui/Input";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./AddCommentForm.module.scss";

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    onChange={onCommentTextChange}
                    value={text}
                    placeholder={t("Введите текст комментария")}
                />
                <Button
                    className={cls.sendBtn}
                    onClick={onSendHandler}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t("Отправить")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
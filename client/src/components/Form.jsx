import { useCallback, useState } from "react";
import { Input } from "./Input";
import { sendMessage } from "../api/api";
import { useFetching } from "../lib/useFetching";
import { validateFormData } from "../lib/validateFormData";

export const Form = () => {
    const [name, setName] = useState("");
    const [lastname, setLastame] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [messageBlock, setMessageBlock] = useState("");
    const { fetching, isLoading, error } = useFetching(sendMessage);

    const onSetName = useCallback((name) => {
        setName(name);
    }, []);

    const onSetLastname = useCallback((lastname) => {
        setLastame(lastname);
    }, []);

    const onSetEmail = useCallback((email) => {
        setEmail(email);
    }, []);

    const onSetComment = useCallback((e) => {
        setComment(e.target.value);
    }, []);

    const onSend = async (e) => {
        e.preventDefault();

        const errorArr = validateFormData(name, lastname, email, comment);
        if (errorArr.length) {
            return alert(errorArr.join(' / '));
        }

        const data = JSON.stringify({
            name,
            lastname,
            email,
            comment,
        });
        const result = await fetching(data);
        setMessageBlock(result);
    };

    return (
        <form className="max-w-[400px] w-full mx-auto p-4 border border-orange-600 rounded">
            {error && <div className="text-red-600 text-center">{error}</div>}
            {messageBlock}
            <h1 className="mb-4 text-center font-bold">FORM</h1>
            <div className="mb-4">
                <Input
                    value={name}
                    onChange={onSetName}
                    placeholder="name"
                    type="text"
                />
            </div>
            <div className="mb-4">
                <Input
                    value={lastname}
                    onChange={onSetLastname}
                    placeholder="lastname"
                    type="text"
                />
            </div>
            <div className="mb-4">
                <Input
                    value={email}
                    onChange={onSetEmail}
                    placeholder="email"
                    type="email"
                />
            </div>
            <div className="mb-4">
                <textarea
                    value={comment}
                    onChange={onSetComment}
                    name="comment"
                    placeholder="comment"
                    rows="4"
                    className="w-full border p-2 rounded focus:border-orange-600"
                ></textarea>
            </div>
            <button
                onClick={onSend}
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded"
            >
                Send
            </button>
        </form>
    );
};

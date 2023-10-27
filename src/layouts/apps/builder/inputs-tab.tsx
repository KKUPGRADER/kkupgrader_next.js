
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDeleteOutline, MdOutlineDragIndicator } from "react-icons/md";
import { TbEdit, TbTrash } from "react-icons/tb";
import { InputType } from "src/types/app";
import { INPUT_TYPES } from "../common/constants";
import { useBuilderContext } from "../common/context/builder-context";



export default function InputTab({ inputs }: {
    inputs: InputType[]
}) {
    const { builderData, updateBuilderData } = useBuilderContext();

    const [input, setInput] = useState<InputType>({
        id: "",
        label: "",
        defaultValue: "",
        required: true,
        placeholder: "",
        type: "none",
        value: "",
        constraints: {
            data_type: "str",
            min_length: 1,
            max_length: 200,
        },
        name: "",
        options: []
    });

    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

    // Drag and Drop Logic
    const handleDragStart = (index: number) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        const items = [...builderData.formFlow?.inputs];
        const draggedItem = items[draggedItemIndex !== null ? draggedItemIndex : index];
        items.splice(draggedItemIndex !== null ? draggedItemIndex : index, 1);
        items.splice(index, 0, draggedItem);
        updateBuilderData({
            ...builderData,
            formFlow: {
                ...builderData.formFlow,
                inputs: items,
            },
        });
        setDraggedItemIndex(index);
    };

    // Utility function to update form data
    const updateBuilderDataAndResetInput = (updatedInput: InputType) => {
        const updatedInputs = [...builderData.formFlow?.inputs];
        const index = updatedInputs.findIndex((item) => item.id === updatedInput.id);
        if (index !== -1) {
            updatedInputs.splice(index, 1, updatedInput);
        } else {
            updatedInputs.push(updatedInput);
        }

        updateBuilderData({
            ...builderData,
            formFlow: {
                ...builderData.formFlow,
                inputs: updatedInputs,
            },
        });

        setInput({
            id: "",
            label: "",
            defaultValue: "",
            required: true,
            placeholder: "",
            type: "text_field",
            value: "",
            constraints: {
                "data_type": "str",
                "min_length": 1,
                'max_length': 200,
            },
            name: "",
            options: []
        });
        console.log(builderData)
    };


    return (<>

        <div className="flex flex-col gap-2">

            <div className="flex flex-col justify-between items-center p-5 bg-slate-100 rounded-md">
                <div className="flex flex-row justify-between items-center w-full">
                    <Label htmlFor="add_field">
                        Input Field
                    </Label>
                    <Select onValueChange={(value) => {
                        console.log(value)
                        setInput((input) => {
                            return {
                                ...input,
                                type: value,
                                constraints: {
                                    ...input.constraints,
                                    data_type: value === "numeric" ? "int" : "str",
                                    ...{
                                        permissible_values: value === "dropdown" || value === "radio_button" ? [""] : undefined
                                    }
                                }

                            }
                        })

                    }}
                    >
                        <SelectTrigger className="w-[180px] bg-slate-100">
                            <SelectValue placeholder={"Field Type"} />
                        </SelectTrigger>
                        <SelectContent>
                            {INPUT_TYPES?.map((item, index) => (
                                <SelectItem key={index} value={item.value} role="button">
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-row justify-between items-center w-full gap-2 my-2">
                    <Input  variant="ghost" id="id" type="text" placeholder="@Field Name (eg. user_name)"
                        value={input.id}
                        onChange={(e) => {
                            setInput({
                                ...input,
                                id: e.target.value,
                                label: e.target.value.replaceAll("_", " ").replaceAll("-", " ").split(" ").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(" ")
                            })
                        }} />
                    <div className="items-center flex gap-2">
                        <Label htmlFor="mandatory">
                            Mandatory
                        </Label>
                        <Switch
                            name="mandatory"
                            defaultChecked={true}
                            onCheckedChange={(checked) => {
                                setInput({
                                    ...input,
                                    required: checked
                                })
                            }}
                        />
                    </div>

                </div>
                {(input.type === "text_field" || input.type === "text_multiline") ?
                    <Input id="placeholder"  variant="ghost"  type="text" placeholder="Field Placeholder" value={input.placeholder} onChange={(e) => {
                        setInput({
                            ...input,
                            placeholder: e.target.value
                        })
                    }} /> : null}
                {input.type === "numeric" ? <div className="flex w-full flex-row gap-1 my-2">
                    <Input id="min"  variant="ghost"  type="number" placeholder="Min"
                        value={input.constraints["min_length"] ?? 0}
                        onChange={(e) => {
                            setInput({
                                ...input,
                                constraints: {
                                    ...input.constraints,
                                    min_length: parseInt(e.target.value ?? 0)
                                }
                            })
                        }
                        }
                    />
                    <Input  variant="ghost"  id="max" type="number" placeholder="Max"
                        value={input.constraints["max_length"]}
                        onChange={(e) => {
                            setInput({
                                ...input,
                                constraints: {
                                    ...input.constraints,
                                    max_length: parseInt(e.target.value ?? 0)
                                }
                            })
                        }
                        }
                    />

                </div> : null}
                {(input.type === "dropdown" || input.type === "radio_button") ? <div>
                    <Label>
                        Add Options
                    </Label>

                    {input.constraints['permissible_values']?.map((option, index) => {
                        return (<div className="flex flex-row justify-between items-center w-full gap-2 my-2" key={index}>
                            <Input  variant="ghost"  id={`option_${index}`} type="text" placeholder={`Option ${index + 1}`} value={option}
                                onChange={(e) => {
                                    setInput({
                                        ...input,
                                        constraints: {
                                            ...input.constraints,
                                            permissible_values: input.constraints['permissible_values']?.map((item, i) => {
                                                if (i === index) {
                                                    return e.target.value
                                                } else {
                                                    return item
                                                }
                                            })
                                        }
                                    })

                                }} />
                            <Button variant="outline" size="icon" onClick={() => {
                                setInput({
                                    ...input,
                                    constraints: {
                                        ...input.constraints,
                                        permissible_values: input.constraints['permissible_values'] ? [...input.constraints['permissible_values'], ""] : [""]
                                    }
                                })
                            }}><IoMdAdd /></Button>
                            <Button variant="outline" size="icon" onClick={() => {
                                setInput({
                                    ...input,
                                    constraints: {
                                        ...input.constraints,
                                        permissible_values: input.constraints['permissible_values']?.filter((_, i) => {
                                            if (i === index) {
                                                return false
                                            } else {
                                                return true
                                            }
                                        })
                                    }
                                })
                            }}
                                disabled={input.constraints['permissible_values']?.length === 1 ? true : false}
                            >
                                <MdOutlineDeleteOutline />
                            </Button>

                        </div>)
                    })}</div> : null}
                <div className="flex flex-row justify-center items-center my-2">
                    <Button variant="outline" onClick={() => {
                        if (input.id === "") {
                            toast.error("Field ID cannot be empty")
                            return
                        }
                        updateBuilderDataAndResetInput(input)

                    }}>
                        Add Field
                    </Button>

                </div>


                <div className="flex flex-col gap-1 my-2 border  w-full bg-gray-50 p-1  rounded-md  ">
                    {
                        builderData.formFlow?.inputs?.map((item, index) => {
                            return (<div className="flex flex-row justify-between items-center w-full gap-2 border-b-1 border-slate-200" key={index} draggable>
                                <span className="ms-3 font-semibold text-xs">
                                    @{item.id}
                                </span>

                                <div className="flex gap-1 text-sm items-center">


                                    <Button
                                        onClick={() => {
                                            setInput(item);

                                        }}
                                        variant="outline" size="icon"
                                        className="w-8 h-8"

                                    ><TbEdit size={16} /></Button>
                                    <Button
                                        onClick={() => {
                                            const _inputs = [...builderData.formFlow?.inputs]
                                            _inputs?.splice(index, 1);
                                            updateBuilderData({
                                                ...builderData,
                                                formFlow: {
                                                    ...builderData.formFlow,
                                                    inputs: _inputs
                                                }
                                            })

                                        }}
                                        variant="outline" size="icon"
                                        className="w-8 h-8"


                                    ><TbTrash size={16} /></Button>
                                    <Button
                                        onDragOver={(e) => handleDragOver(e, index)}
                                        onDragStart={() => handleDragStart(index)}

                                        variant="outline" size="icon"
                                        className="w-8 h-8"


                                    >   <MdOutlineDragIndicator
                                            size={16}

                                        /></Button>
                                </div>

                            </div>)
                        })
                    }
                    {builderData.formFlow?.inputs?.length === 0 ? <span className="px-3 py-2 text-sm font-semibold mx-auto bg-slate-100 rounded">No Input Fields</span> : null}
                </div>



            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between items-center">
                <Label htmlFor="generate_btn">
                    Generation Button Text
                </Label>
                <Select
                    onValueChange={(value) => {
                        updateBuilderData({
                            ...builderData,
                            formFlow: {
                                ...builderData.formFlow,
                                controls: [
                                    {
                                        controlType: "button",
                                        text: value,
                                        action: "get_output",
                                        id:"get_output",
                                        variant:"default"
                                    },
                                ],
                            },
                        });
                    }}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={"Button Text"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Button Text</SelectLabel>
                            {["Generate", "Analyse", "Detect"]?.map((value) => (
                                <SelectItem key={value} value={value}>
                                    {value}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div >

    </>)
}


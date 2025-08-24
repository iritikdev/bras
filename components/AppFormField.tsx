import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";

interface AppFormFieldProps {
    form: {
        control: Control<any>; // You can replace `any` with your form's data type
    };
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
}

export function AppFormField({ form, name, label, description, placeholder }: AppFormFieldProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
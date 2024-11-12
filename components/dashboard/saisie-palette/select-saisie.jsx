import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SelectSaisie({ label, id, placeholder, options }) {
  return (
    <div className="grid w-full max-w-sm items-center mb-3 gap-1.5">
      <Label className="font-bold" htmlFor={id}>
        {label}
      </Label>
      <Select id={id}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

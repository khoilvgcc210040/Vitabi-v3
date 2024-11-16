import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const formSchema = z.object({
  search: z.string(),
});

interface AdminSearchProps {
  onSearch: (query: string) => void;
}

export default function AdminSearch({ onSearch }: AdminSearchProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onSearch(values.search); 
  };

  // Lắng nghe sự thay đổi của trường tìm kiếm và tự động gửi khi giá trị rỗng
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    form.setValue("search", value);
    if (value === "") {
      onSearch(""); // Hiển thị tất cả nếu chuỗi tìm kiếm rỗng
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
      <div className="relative flex items-center">
        <Search
          className="absolute left-3 h-5 w-5 text-muted-foreground"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg md:w-2/3 lg:w-1/2"
          {...form.register("search")}
          onChange={handleInputChange} 
        />
      </div>
    </form>
  );
}

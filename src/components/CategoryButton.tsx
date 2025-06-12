export default function CategoryButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div className="whitespace-nowrap hover:text-amber-600 hover:cursor-pointer transition">
            {children}
        </div>
    )

}
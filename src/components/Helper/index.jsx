import { Text } from "..";

const Helper = ({ color = "default", className, children, ...props }) => {
  const colorClasses = {
    default: "gray-50",
    green: "green-90",
    red: "danger-90",
  };

  return (
    <Text
      tag="p"
      size="sm"
      weight="400"
      color={colorClasses[color]}
      className={className}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Helper;

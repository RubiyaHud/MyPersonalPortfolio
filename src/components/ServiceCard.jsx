// components/ServiceCard.jsx
export default function ServiceCard({ title, description, Icon, iconColor, bgColor }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className={`${bgColor} p-3 rounded-xl`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

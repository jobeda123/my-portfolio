import React from "react";
import { USER_SOCIAL_PLATFORMS } from "@/constants/user";
import Icon, { IconType } from "@/components/icons";


function ContactInformation() {
  const filteredContacts = USER_SOCIAL_PLATFORMS.filter(
    (contact) => contact.name.toLowerCase() === "email" || contact.name.toLowerCase() === "phone"
  );
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredContacts.map((contact) => (
        <a
          key={contact.name}
          href={contact.url}
          className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/30 group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-4 h-4 text-emerald-600" type={contact.icon as IconType} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {contact.name}
            </h3>

            <p className="text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
              {contact.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ContactInformation;

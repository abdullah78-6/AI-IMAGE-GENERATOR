import React from "react";
import { FaCheck, FaBolt, FaCrown } from "react-icons/fa";
const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out AI image generation.",
      icon: <FaBolt />,
      features: [
        "10 AI image generations",
        "Standard image quality",
        "Basic AI models",
        "Download generated images",
        "Community support",
      ],
      button: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "9",
      description: "For creators who generate images regularly.",
      icon: <FaCrown />,
      features: [
        "100 AI image generations",
        "High-quality images",
        "Advanced AI models",
        "Faster image generation",
        "Download without limits",
        "Priority support",
      ],
      button: "Start Creating",
      popular: true,
    },
    {
      name: "Premium",
      price: "19",
      description: "For professionals and heavy AI creators.",
      icon: <FaCrown />,
      features: [
        "500 AI image generations",
        "Ultra HD image quality",
        "All AI models",
        "Fastest generation speed",
        "Commercial usage",
        "Priority support",
      ],
      button: "Go Premium",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full px-5 py-20 text-slate-900 sm:px-8 lg:px-16"
    >
      
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-700/10 px-4 py-2 text-sm font-medium text-purple-700">
          Simple Pricing
        </span>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Choose the perfect plan for{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            your creativity
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-800 sm:text-base">
          Create stunning AI-generated images with a plan that fits your needs.
          Start for free and upgrade whenever you need more.
        </p>
      </div>

      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "border-purple-500 bg-gradient-to-b from-purple-950/70 to-slate-900 shadow-2xl shadow-purple-500/20"
                : "border-slate-300 bg-slate-400/70 hover:border-slate-700"
            }`}
          >
      
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-xs font-bold text-white shadow-lg">
                MOST POPULAR
              </div>
            )}

      
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg ${
                plan.popular
                  ? "bg-purple-500 text-white"
                  : "bg-slate-800 text-purple-400"
              }`}
            >
              {plan.icon}
            </div>

            
            <h3 className="text-xl font-bold text-slate-800">
              {plan.name}
            </h3>

            <p className="mt-2 min-h-[48px] text-sm leading-6 text-white">
              {plan.description}
            </p>

            
            <div className="my-7 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-slate-900">
                ${plan.price}
              </span>
              <span className="mb-1 text-sm text-slate-200">/ month</span>
            </div>

            
            <button
              className={`w-full rounded-xl px-5 py-3 font-semibold transition ${
                plan.popular
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20 hover:from-purple-600 hover:to-pink-600"
                  : "border border-slate-700 bg-slate-800 text-white hover:border-purple-500 hover:bg-slate-800"
              }`}
            >
              {plan.button}
            </button>

       
            <div className="my-7 h-px bg-slate-200" />

            
            <p className="mb-4 text-sm font-semibold text-slate-500">
              What's included:
            </p>

            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-700/10 text-xs text-purple-800">
                    <FaCheck />
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
      <p className="mt-10 text-center text-xs text-slate-600">
        No hidden fees. Upgrade, downgrade, or cancel anytime.
      </p>
    </section>
  );
};

export default Pricing;


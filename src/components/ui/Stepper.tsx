import { colors } from "@/constants/theme";
import { Check } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import Typography from "./Typography";

type StepperProps = {
  steps: string[];
  currentStep: number;
};

const CIRCLE = 30;
const LABEL_WIDTH = 90; // bề rộng tối đa của label

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: (LABEL_WIDTH - CIRCLE) / 2,
        paddingBottom: 50,
      }}
    >
      {steps.map((label, index) => {
        const isDone = index < currentStep;
        const isActive = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <View
              style={{
                width: CIRCLE,
                height: CIRCLE,
              }}
            >
              <View
                style={{
                  width: CIRCLE,
                  height: CIRCLE,
                  borderRadius: CIRCLE / 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isDone
                    ? colors.success
                    : isActive
                      ? colors.primary
                      : "#E5E7EB",
                }}
              >
                {isDone ? (
                  <Check size={15} color="white" strokeWidth={3} />
                ) : (
                  <Text
                    style={{
                      color: isActive ? "white" : "#9CA3AF",
                      fontWeight: "bold",
                    }}
                  >
                    {index + 1}
                  </Text>
                )}
              </View>

              <Typography
                variant="body"
                style={{
                  position: "absolute",
                  top: CIRCLE + 8,
                  left: -(LABEL_WIDTH - CIRCLE) / 2,
                  textAlign: "center",
                  width: LABEL_WIDTH,
                  fontWeight: "semibold",
                  color: isDone || isActive ? colors.primary : "#9CA3AF",
                }}
              >
                {label}
              </Typography>
            </View>

            {/* Đường line nối sang bước kế tiếp */}
            {!isLast && (
              <View
                style={{
                  flex: 1,
                  height: 3,
                  backgroundColor: isDone ? colors.success : "#E5E7EB",
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

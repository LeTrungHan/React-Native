import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#C4C4C4",
  },
  productContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 13,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: 104,
    height: 127,
  },
  productDetails: {
    width: 240,
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
  },
  productSupplier: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#EE0D0D",
  },
  productOriginalPrice: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
    color: "#808080",
    textDecorationLine: "line-through",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityControls: {
    flexDirection: "row",
  },
  quantityButton: {
    width: 14.22,
    height: 16,
    backgroundColor: "#C4C4C4",
  },
  quantityButtonText: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 15,
    textAlign: "center",
    color: "#808080",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 17.58,
  },
  buyLaterText: {
    color: "#134FEC",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
  },
  discountContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    paddingHorizontal: 13,
  },
  discountText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
    color: "#011627",
  },
  viewDiscountText: {
    marginLeft: 16,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
    color: "#134FEC",
  },
  applyDiscountContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 20,
  },
  discountButton: {
    width: 208,
    height: 45,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#808080",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  discountIcon: {
    width: 32,
    height: 16,
    marginRight: 10,
    backgroundColor: "#F2DD1B",
  },
  discountButtonText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#011627",
  },
  applyButton: {
    width: 99,
    height: 45,
    borderRadius: 2,
    backgroundColor: "#0A5EB7",
    alignItems: "center",
    justifyContent: "center",
  },
  applyButtonText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 23.44,
    color: "#FFFFFF",
    alignItems: "center",
  },
  giftVoucherContainer: {
    height: 51,
    marginTop: 16,
    paddingHorizontal: 13,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  giftVoucherText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
    color: "#011627",
  },
  enterHereText: {
    marginLeft: 16,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
    color: "#134FEC",
  },
  subtotalContainer: {
    height: 51,
    marginTop: 16,
    paddingLeft: 13,
    paddingRight: 24,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#011627",
  },
  subtotalPrice: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#EE0D0D",
  },
  totalContainer: {
    height: 120,
    marginTop: "auto",
    justifyContent: "center",
    paddingHorizontal: 13,
    backgroundColor: "#FFFFFF",
  },
  totalDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21.09,
    color: "#808080",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23.44,
    color: "#EE0D0D",
  },
  orderButton: {
    width: "100%",
    height: 45,
    borderRadius: 2,
    backgroundColor: "#E53935",
    alignItems: "center",
    justifyContent: "center",
  },
  orderButtonText: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 23.44,
    color: "#FFFFFF",
  },
});

export default styles;
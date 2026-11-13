def validate_used_item(condition, price_cents):
    if condition not in ("like_new", "good", "fair"):
        raise ValueError("Invalid condition")
    if price_cents <= 0:
        raise ValueError("Price must be greater than $0")


used_game_title = "Grand Theft Auto 6"
condition = "good"
price_cents = 2499

try:
    validate_used_item(condition, price_cents)
except ValueError as error:
    print("Cannot list item:", error)
else:
    print("Name: ", used_game_title)
    print("Condition: ", condition)
    print("Price: ", price_cents)

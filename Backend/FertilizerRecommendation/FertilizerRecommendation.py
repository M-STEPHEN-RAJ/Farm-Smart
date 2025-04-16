from transformers import pipeline, AutoTokenizer, AutoModelForSeq2SeqLM

# Load Hugging Face Model and Tokenizer
model_name = "t5-small"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# Define text generation pipeline
pipe = pipeline("text2text-generation", model=model, tokenizer=tokenizer, framework="pt")

# Terminal-based input loop
def main():
    print("\n🌿 Fertilizer Recommendation System")
    print("Type your crop and condition (or type 'exit' to quit):")

    while True:
        query = input("\nEnter your query: ").strip()
        if query.lower() == "exit":
            print("Exiting...")
            break

        # Add prefix to guide the model properly
        modified_query = f"recommend fertilizer: {query}"

        # Generate fertilizer recommendation
        output = pipe(modified_query, max_length=100, num_return_sequences=1, do_sample=True, temperature=0.7)
        
        # Display recommendation
        print(f"\n✅ Recommended Fertilizer: {output[0]['generated_text']}")

if __name__ == "__main__":
    main()

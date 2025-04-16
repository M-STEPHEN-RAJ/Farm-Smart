import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import joblib

# Load the dataset
df = pd.read_csv('cpdata.csv')

# Features and target
X = df[['temperature', 'humidity', 'ph', 'rainfall']]
y = df['label']

# Encode target labels
encoder = LabelEncoder()
y_encoded = encoder.fit_transform(y)

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate model
y_pred = model.predict(X_test)
print(f'Accuracy: {accuracy_score(y_test, y_pred)}')

# Save both model and encoder
joblib.dump(model, 'crop_predictor_model.pkl')
joblib.dump(encoder, 'crop_label_encoder.pkl')

print("✅ Model and encoder saved as 'crop_predictor_model.pkl' and 'crop_label_encoder.pkl'")

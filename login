$ curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"sindisiwe@example.com","password":"securePassword123"}'

{"token":"mock-jwt-token-xyz123","message":"Login successful"}

export default function cropSentence(sentence, length) {
	if (sentence.length <= length) return sentence;

	return `${sentence
		.split("")
		.slice(0, length + 1)
		.join("")
		.trim()} [...]`;
}
